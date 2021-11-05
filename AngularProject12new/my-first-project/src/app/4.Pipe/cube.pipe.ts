import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name:'cube'
})

export class CubePipe implements PipeTransform{
    transform(data: any,no1:number) {
        return no1?(data*data*data)+no1:data*data*data;
    }
}






