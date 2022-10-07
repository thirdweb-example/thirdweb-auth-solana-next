'use strict';

var reactQuery = require('@tanstack/react-query');
var React = require('react');
var jsxRuntime = require('react/jsx-runtime');

const QueryClientProviderWithDefault = _ref => {
  let {
    queryClient,
    children
  } = _ref;
  const queryClientWithDefault = React.useMemo(() => {
    return queryClient ? queryClient : new reactQuery.QueryClient();
  }, [queryClient]);
  return /*#__PURE__*/jsxRuntime.jsx(reactQuery.QueryClientProvider, {
    client: queryClientWithDefault,
    children: children
  });
};

// we prefix all our query keys with this to avoid possible collisions with user-defined queries that share the same query client
const TW_QUERY_KEY_PREFIX = "__tw__"; // marker to make sure the query will not get stored in local storage by a query persister

const NEVER_PERSIST_QUERY_POSTFIX = {
  persist: false
};
function ensureTWPrefix(key) {
  if (key[0] === TW_QUERY_KEY_PREFIX) {
    return key;
  }

  return [TW_QUERY_KEY_PREFIX, ...key];
}
function neverPersist(key) {
  return [...key, NEVER_PERSIST_QUERY_POSTFIX];
}
function shouldNeverPersistQuery(key) {
  return key[key.length - 1] === NEVER_PERSIST_QUERY_POSTFIX;
} // EVM

function createSOLQueryKey(key) {
  return ensureTWPrefix(["sol", ...key]);
}
function createSOLQueryKeyWithNetwork(key, network) {
  return createSOLQueryKey([network, ...key]);
}
function createSOLProgramQueryKey(program) {
  let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const network = program === null || program === void 0 ? void 0 : program.network;
  const address = program === null || program === void 0 ? void 0 : program.publicKey.toBase58();
  return createSOLQueryKeyWithNetwork(["program", address, ...key], network || null);
}

exports.QueryClientProviderWithDefault = QueryClientProviderWithDefault;
exports.createSOLProgramQueryKey = createSOLProgramQueryKey;
exports.createSOLQueryKeyWithNetwork = createSOLQueryKeyWithNetwork;
exports.ensureTWPrefix = ensureTWPrefix;
exports.neverPersist = neverPersist;
exports.shouldNeverPersistQuery = shouldNeverPersistQuery;
