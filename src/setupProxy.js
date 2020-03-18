const {createProxyMiddleware}=require("http-proxy-middleware")
module.exports=(app)=>{
    app.use("/app",createProxyMiddleware({
        target:"http://rap2.taobao.org:38080/",
        changeOrigin:true
    }))
}