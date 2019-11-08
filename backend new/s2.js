var express=require('express')
var mysql=require('mysql')
var app=express();

var connection=mysql.createPool
({  connectionLimit:60,
    host:'localhost',
    user:'root',
    password:'',
    database:'item'


});



app.get('/',function(req,resp)
{connection.getConnection(function(error,tempCont)
{
 if(!!error)
    {
        tempCont.release();
        console.log('error');
    }
    else
    { console.log('connected');
        tempCont.query("select * from product",function(error ,rows,field)
        {
            tempCont.release();
            if(!!error){
                console.log('error occur');
            }
            else{
                resp.json(rows);
            }
        })
    }
});
}

    
)
app.listen(3000)
