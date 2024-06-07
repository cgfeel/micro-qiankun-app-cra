module.exports = {
    webpack: function(config) {
        config.output.libraryTarget = "umd";
        config.output.library = "@levi/react-project";
        return config;
    },
    // 不需要开启，默认就有
    /*devServer: function(configFunction) {
        return function(proxy, allowHost) {
            const config = configFunction(proxy, allowHost);
            const { headers = {} } = config;

            config.headers = {
                ...headers,
                "Access-control-Allow-Origin": "*"
            };
            return config;
        }
    }*/
};