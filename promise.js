var data1 = websqlGetAData1("friend", "111111");

console.log(data1);

function websqlGetAData1(tableName, userId) {
    var self = this
    var promise = new Promise(function (resolve, reject) {
        resolve(1)
    })

    var a = {
        b:function(){},
        c:function(cd){cd()}
    }

    return(a.b(function(){
        function c(){};
        return c;
    }));
}

