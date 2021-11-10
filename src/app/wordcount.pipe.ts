import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordcount'
})
export class WordcountPipe implements PipeTransform {

  transform(words: string,count:number): string {
    return  words.split(' ',count).length <count ? words :words.split(' ',count).join(' ') + '...';
  }

}
