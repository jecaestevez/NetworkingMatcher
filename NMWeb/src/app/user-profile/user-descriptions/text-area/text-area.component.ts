import {Component, Input, OnInit, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import {MdTextareaAutosize} from '@angular/material'

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  @Input() thisFormGroupName: string
  @Input() parentFormGroup: FormGroup
  @Input() placeholder: string
  @Input() rows: number

  @ViewChildren(MdTextareaAutosize) textAreas


  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.autoResizeTextArea()
  }

  public autoResizeTextArea() {
    console.log('autoResizeTextAreas: ', this.textAreas)
    this.textAreas.forEach(area => {
      // https://github.com/angular/material2/issues/5247
      // -> http://plnkr.co/edit/gdZ6jOmQyzj2gg7ori44?p=preview
      // -> https://github.com/angular/material2/issues/4657 (closed Jul 20)
      area.resizeToFitContent() // apparently does not work here
    })
  }

  static buildFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      text: ''
    })
  }


}
