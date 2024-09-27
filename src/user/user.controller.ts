import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
    @Get()
    getUsers(){
        return {name:'Sarthak',email:'sarthak@mckinsol.com'}
    }

    @Get('/:userId')
    // getUser(@Req() req:Request){
    //     console.log(req.params);
    //     return {name:'Sarthak',email:'sarthak@mckinsol.com'}
    // }
    getUser(@Param() params:{userId:number}){
        return {name:'Sarthak',email:'sarthak@mckinsol.com', message:`My userId is ${params.userId}`}
    }
    @Post()
    stor(@Req() req:Request){
        console.log(req.body);
        return req.body;
    }
}
