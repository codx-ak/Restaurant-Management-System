import {rest, setupWorker } from "msw";

const worker=setupWorker(

    //Getting Feedback data
    rest.get('https://codx-json-server.vercel.app/api/feedback',(req,res,ctx)=>{
        return res()
    }),

    //creating new feedback
    rest.post('https://codx-json-server.vercel.app/api/feedback',(req,res,ctx)=>{
        return res()
    }),

    //Getting Menu data
    rest.get('https://codx-json-server.vercel.app/api/sample_menu',(req,res,ctx)=>{
        return res()
    }),

    //Getting Menu data
    rest.get('https://codx-json-server.vercel.app/api/menu',(req,res,ctx)=>{
        return res()
    }),


    //Gettting All Table data
    rest.get('https://codx-json-server.vercel.app/api/tables',(req,res,ctx)=>{
        return res()
    }),

    //Getting data with id
    rest.get('https://codx-json-server.vercel.app/api/tables/:id',(req,res,ctx)=>{
        return res()
    }),

    //Getting data with status
    rest.get('https://codx-json-server.vercel.app/api/tables?status=Available',(req,res,ctx)=>{
        return res()
    }),

    //Getting data with status
    rest.get('https://codx-json-server.vercel.app/api/tables?status=Booked',(req,res,ctx)=>{
        return res()
    }),

    //Table Booking
    rest.patch('https://codx-json-server.vercel.app/api/tables/:id',(req,res,ctx)=>{
        return res()
    }),

)

worker.start()