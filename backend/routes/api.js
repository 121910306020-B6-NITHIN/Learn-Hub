const { Console } = require('console');
const { Router } = require('express');
var express = require('express');
const { data } = require('jquery');
const { default: mongoose } = require('mongoose');
const { send } = require('process');

var router=express.Router();

var User=mongoose.model('User');
var Ds=mongoose.model('Ds');

router.post('/postUserInfo',(req,res)=>{
    var body=req.body;
    console.log(body);
    var user=new User(body);
    console.log(user);
    user.save().then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(200).send(false);
    })
})

router.get('/getUserInfo',(req,res)=>{
    User.find().then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})

router.get('/getUserById/:id',(req,res)=>{
    User.find({"_id":req.params.id}).then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);

    })

})

router.put('/UpdateUserData/:id',(req,res)=>{
    var body=req.body;
    User.updateOne({"_id":req.params.id},{$set:body}).then(data=>{
        console.log(data);
        res.status(200).send(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})

router.delete('/deleteUser/:id',(req,res)=>{
    User.deleteOne({'_id':req.params.id}).then(data=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(200).send(err);
    })
})

router.post('/postDataInfo',(req,res)=>{
    var body=req.body;
    console.log(body);
    var user=new Ds(body);
    console.log(user);
    user.save().then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})

router.get('/getData',(req,res)=>{
    Ds.find().then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})

router.get('/getDataById/:id',(req,res)=>{
    Ds.find({"_id":req.params.id}).then(data=>{
        console.log(data);
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})

router.get('/getDataByName/:name',(req,res)=>{
    User.find({"fname":req.params.name}).then(data=>{
        console.log(data)
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})
router.put('/UpdateData/:id',(req,res)=>{
    var body=req.body;
    Ds.updateOne({"_id":req.params.id},{$set:body}).then(data=>{
        console.log(data);
        res.status(200).send(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})

router.delete('/deleteDataById/:id',(req,res)=>{
    Ds.deleteOne({'_id':req.params.id}).then(data=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(200).send(err);
    })
})
router.get('/getDataName/:name',(req,res)=>{
    Ds.find({"Key":req.params.name}).then(data=>{
        console.log(data)
        res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})

router.get('/getDataMail/:name',(req,res)=>{
    User.find({"email":req.params.name}).then(data=>{
        console.log(data)
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).send(err);
    })
})

module.exports = router;