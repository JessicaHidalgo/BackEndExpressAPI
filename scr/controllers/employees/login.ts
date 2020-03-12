import express, {Request,Response} from 'express';
import {employees} from '../../fakeData/employee.json';
import {Employee} from '../../models/employee';

export default (req: Request, res: Response)=>{
    const employee : Employee = req.body;
    console.log(employee);
    const index = employees.findIndex(e => e.email === employee.email);
    //Checar 400 gral
    if(index<0){
      return res.sendStatus(404);
    }
    
    return employee.password===employees[index].password ? res.sendStatus(200).json(employee) :
     res.sendStatus(401);
    
}