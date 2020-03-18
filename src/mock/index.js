const Mock = require("mockjs")

const data = Mock.mock({
    'data|100': [
        {
            "key|+1": 1001,
            "booksName": "@csentence(4, 8)",
            "authName": "@cname",
            "booksImage": "@image('70x90', '#50B347', '#FFF', 'Mock.js')",
            'tags': () => {
                var arr = ["玄幻", "修仙", "动作", "爱情", "都市"]
                var n = parseInt(1 + Math.random() * arr.length);
                return arr.slice(0, n);
            },
            "booksDes": "@cparagraph()",
            "isPay": () => {
                var n = Math.random();
                if (n > 0.5) {
                    return true;
                } else {
                    return false
                }
            }
        }
    ]
})


Mock.mock(/\/books\/booksList/,"get",(options)=>{
    // console.log(options)
    let {page,limit}=JSON.parse(options.body);
    var arr=[];
    for(var i=(page-1)*limit;i<page*limit;i++){

        arr.push(data.data[i]);
    }
    return {
        data:arr,
        count:data.data.length
    }
})