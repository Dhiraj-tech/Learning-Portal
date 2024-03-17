import { genPassword } from "../../lib/function.js"
import { User } from "../../models/index.js"


class studentController {
    index = async(req,res,next)=>{
        try{
            const student = await User.find({type:'Student'}).exec()
            res.json(student)
        }catch(e){
            next({message: 'problem while processing request', status: 400})
        }
    }

    store = async(req,res,next)=>{
        try{
            const {name,email,password,confirm_password, bio, status} = req.body

            if (password == confirm_password){
                const hash = await genPassword(password)

            await User.create({name,email, bio, status,type:'Student',password:hash})
            
            res.status(201).json({
                success:'Student created'
            })
            }else{
                next({message: 'Password not confirmed',status: 422})
            }

        }catch(e){
            console.error(e)
            next({message: 'problem while processing request', status: 400})
        }
    }

    show = async(req,res,next)=>{
        try{
            const student = await User.findById(req.params.id)
            res.json(student)

        }catch(e){
            next({message:'Problem while processing request', status: 400})
        }
    }

    update = async(req,res,next)=>{
        try{
            const {name,email,bio,status} = req.body
            await User.findByIdAndUpdate(req.params.id,{name,email,bio,status})
            res.json({
                success:'Student updated'
            })
        }catch(e){
            next({message:'Problem while processing request', status: 400})
        }
    }

    destroy = async(req,res,next)=>{
        try{
            await User.findByIdAndDelete(req.params.id)
            res.json({
                success:'Student removed'
            })
        }catch(e){
            next({message:'Problem while processing request', status: 400})
        }
    }
}

export default new studentController
