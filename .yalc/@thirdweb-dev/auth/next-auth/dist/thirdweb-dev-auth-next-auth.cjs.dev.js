'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdk = require('@thirdweb-dev/sdk');
var cookie = require('cookie');
var NextAuth = require('next-auth');
var CredentialsProvider = require('next-auth/providers/credentials');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var NextAuth__default = /*#__PURE__*/_interopDefault(NextAuth);
var CredentialsProvider__default = /*#__PURE__*/_interopDefault(CredentialsProvider);

function ThirdwebNextAuth(cfg) {
  const sdk$1 = sdk.ThirdwebSDK.fromPrivateKey(cfg.privateKey, "mainnet");

  function ThirdwebProvider(res) {
    return CredentialsProvider__default["default"]({
      name: "ThirdwebAuth",
      credentials: {
        payload: {
          label: "Payload",
          type: "text",
          placeholder: ""
        }
      },

      async authorize(_ref) {
        let {
          payload
        } = _ref;

        try {
          const parsed = JSON.parse(payload);
          const token = await sdk$1.auth.generateAuthToken(cfg.domain, parsed);
          const address = await sdk$1.auth.authenticate(cfg.domain, token); // Securely set httpOnly cookie on request to prevent XSS on frontend
          // And set path to / to enable thirdweb_auth_token usage on all endpoints

          res.setHeader("Set-Cookie", cookie.serialize("thirdweb_auth_token", token, {
            path: "/",
            httpOnly: true,
            secure: true,
            sameSite: "strict"
          }));
          return {
            address
          };
        } catch (err) {
          return null;
        }
      }

    });
  }

  function nextOptions(req, res) {
    var _cfg$nextOptions$call, _cfg$nextOptions$even;

    async function session(_ref2) {
      let {
        session: _session
      } = _ref2;
      const token = req.cookies.thirdweb_auth_token || "";

      try {
        const address = await sdk$1.auth.authenticate(cfg.domain, token);
        _session.user = { ..._session.user,
          address
        };
        return _session;
      } catch {
        return _session;
      }
    }

    function signOut() {
      res.setHeader("Set-Cookie", cookie.serialize("thirdweb_auth_token", "", {
        path: "/",
        expires: new Date(Date.now() + 5 * 1000)
      }));
    }

    const providers = [...cfg.nextOptions.providers, ThirdwebProvider(res)];
    const configSession = (_cfg$nextOptions$call = cfg.nextOptions.callbacks) === null || _cfg$nextOptions$call === void 0 ? void 0 : _cfg$nextOptions$call.session;
    const callbacks = { ...cfg.nextOptions.callbacks,
      session: configSession ? async params => {
        params.session = await session(params);
        return configSession(params);
      } : session
    };
    const configSignOut = (_cfg$nextOptions$even = cfg.nextOptions.events) === null || _cfg$nextOptions$even === void 0 ? void 0 : _cfg$nextOptions$even.signOut;
    const events = { ...cfg.nextOptions.events,
      signOut: configSignOut ? async params => {
        signOut();
        return configSignOut(params);
      } : signOut
    };
    return { ...cfg.nextOptions,
      providers,
      callbacks,
      events
    };
  }

  async function getUser() {
    return NextAuth.unstable_getServerSession(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], nextOptions(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]));
  }

  function NextAuthHandler() {
    if (arguments.length === 0) {
      return (req, res) => {
        return NextAuth__default["default"](req, res, nextOptions(req, res));
      };
    }

    return NextAuth__default["default"](arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], nextOptions(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]));
  }

  return {
    NextAuthHandler,
    getUser
  };
}

exports.ThirdwebNextAuth = ThirdwebNextAuth;
