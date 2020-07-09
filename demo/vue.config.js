module.exports ={
    configureWebpack: {
        devServer:{
            before(app){
                app.get('/app/goods', function(req,res){
                    res.json({
                        code:0,
                        data:[
                            {
                                id:1,
                                title:'前端',
                                pricle:'100',
                                count:'100'
                            },
                            {
                                id:2,
                                title:'java',
                                pricle:'200',
                                count:'100'
                            },  {
                                id:3,
                                title:'ui',
                                pricle:'100',
                                count:'100'
                            },  {
                                id:4,
                                title:'架构',
                                pricle:'1000',
                                count:'100'
                            },  {
                                id:5,
                                title:'运维',
                                pricle:'100',
                                count:'100'
                            },  {
                                id:6,
                                title:'产品',
                                pricle:'100',
                                count:'100'
                            },
                        ]
                    })
                })
            }
        }
    }
}