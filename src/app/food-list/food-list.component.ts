import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {


  name: string="";
  calories: number = 0;
  image: string ="";
  foodList: Array<any> = [];
  newFoodArray: Array<any> = [];
  searchItem: string = '';
  quantity: number = 0;
  quantityAdded: number = 0;

  constructor() { }

  addFood()
  {
    let addedFood:any = {};
    let valueArr = this.foodList.map(function(item)
    { return item.name });
    let isDuplicate = valueArr.includes(this.name);
    
    if (this.name && this.calories && this.image && !isDuplicate)
    {
      addedFood.name = this.name;
      addedFood.calories = this.calories;
      addedFood.image = this.image;
      addedFood.quantity = this.quantity;
      addedFood.image = this.image;
      this.foodList.push(addedFood);
    }
  }
  ngOnInit(): void {
  }
}
