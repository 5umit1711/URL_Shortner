import express from 'express'
import URL from '../models/urlModel.js';
import shortid from 'shortid';

const router = express.Router();

router.post("/url", async (req, res)=>{
    try{
        const {fullURL} = req.body;
        const shortID = shortid.generate();
        if(!fullURL){
            return res.send({
                success: false,
                message: 'URL required',
            })
        }
        const url = await URL.findOne({redirectURL: fullURL});
        if(url){
            return res.send({
                success: true,
                data: url.url,
            })
        }
        const resp = await URL.create({
            url: shortID,
            redirectURL: fullURL, 
        })
        res.send({
            success: true,
            data: resp.url,
        })
    }catch(error){
        res.send({
            success: false,
            message: error.message,
        })
    }
})

router.get("/:shortUrl", async(req,res)=>{
    try{
        const url = await URL.findOne({url: req.params.shortUrl});
        if(!url){
            return res.redirect("/");
        }
        res.redirect(url.redirectURL);
    }catch(error){
        res.send({
            success: false,
            message: error.message,
        })
    }
})

export default router;