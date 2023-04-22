module.exports = {
    resolve: {
        fallback: {
            util: require.resolve("util/"),
            path: require.resolve("path-browserify"),
            stream: require.resolve("stream-browserify"),
            zlib: require.resolve("browserify-zlib") ,
            os: require.resolve("os-browserify/browser"),
            // fs:require.resolve("fs-browserify/browser"),
            // https: require.resolve("https-browserify"),
            // http: require.resolve("stream-http") ,
            // child_process:require.resolve("child_process"),
            // crypto: require.resolve("crypto-browserify"),
        }
    },
    // node: {
    //     child_process: "empty"
    //     // fs: "empty", // if unable to resolve "fs"
    // },
    
};
