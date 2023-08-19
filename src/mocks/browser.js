import {rest, setupWorker } from "msw";

const worker=setupWorker(

    rest.post('http://127.0.0.1:3000/api/booking',(req,res,ctx)=>{
        return res()
    }),

    rest.delete('http://127.0.0.1:3000/api/booking/:id',(req,res,ctx)=>{
        return res()
    }),
    rest.post('http://127.0.0.1:3000/api/feedback',(req,res,ctx)=>{
        return res()
    }),
)

worker.start()