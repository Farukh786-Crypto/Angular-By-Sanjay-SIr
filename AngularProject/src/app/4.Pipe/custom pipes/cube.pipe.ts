import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'cube',
    pure:true   // if it false becomes impure pipes
})

export class CubePipeComponent implements PipeTransform
{
    transform(data:number,no1:number)
    {
         return no1?(data*data*data)+no1:(data*data*data);
    }
}














