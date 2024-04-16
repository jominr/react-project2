import React, {useState, useReducer} from 'react'
import Meals from './components/Meals/Meals';
import CartContext from './store/cart-context';
import FilterMeals from './components/FilterMeals/FilterMeals';
import Cart from './components/Cart/Cart';

// 模拟一组食物数据
const MEALS_DATA = [
  {
      id: '1',
      title: '汉堡包',
      desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
      price: 12,
      img: '/img/meals/1.png'
  },
  {
      id: '2',
      title: '双层吉士汉堡',
      desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
      price: 20,
      img: '/img/meals/2.png'
  },
  {
      id: '3',
      title: '巨无霸',
      desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
      price: 24,
      img: '/img/meals/3.png'
  }, {
      id: '4',
      title: '麦辣鸡腿汉堡',
      desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
      price: 21,
      img: '/img/meals/4.png'
  }, {
      id: '5',
      title: '板烧鸡腿堡',
      desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
      price: 22,
      img: '/img/meals/5.png'
  }, {
      id: '6',
      title: '麦香鸡',
      desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
      price: 14,
      img: '/img/meals/6.png'
  }, {
      id: '7',
      title: '吉士汉堡包',
      desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
      price: 12,
      img: '/img/meals/7.png'
  }
];

const countReducer = (state, action)=>{
  // 根据action的不同，执行不同的操作
  switch(action.type) {
    case 'ADD': {
      return state + 1;
    }
    case 'SUB': {
      return state - 1;
    }
    default: 
      return state;
  } 
 }

const cartReducer = (state, action) => {
  const newCart = {...state};
  switch(action.type) {
    case 'addItem': {
      if (newCart.items.indexOf(action.meal) === -1) {
        action.meal.amount = 1;
        newCart.items.push(action.meal);
      } else {
        action.meal.amount += 1;
      }
      newCart.totalAmount += 1;
      newCart.totalPrice += action.meal.price;
      return newCart;
    }
    case 'subItem': {
      action.meal.amount -= 1;
      if (action.meal.amount === 0) {
        newCart.items.splice(newCart.items.indexOf(action.meal), 1);
      }
      newCart.totalAmount -= 1;
      newCart.totalPrice -= action.meal.price;
      return newCart;
    }
    case 'clearCart': {
      // 将购物车中商品的数量清0
      newCart.items.forEach(item => delete item.amount);
      newCart.items = [];
      newCart.totalAmount = 0;
      newCart.totalPrice = 0;
      return newCart;
    }
    default: 
      return state;
  }
}

function App() {
  const [mealsData, setMealsData] = useState(MEALS_DATA);

  // 购物车数据
  // const [cartData, setCartData] = useState({
  //   items: [],
  //   totalAmount: 0,
  //   totalPrice: 0
  // })

  const [cartData, cartDispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0
  })

  /*
    useReducer(reducer, initialArg, init)
    第一个参数：
            reducer: 整合函数，对我们当前state的所有操作都应该在该函数中定义，该函数的返回值会成为state的新值。
                    reducer在执行时，会收到两个参数，第一个是当前最新的state, 第二个是action对象。
                    为了避免reducer会重复创建，通常reducer会定义到组件的外部。
    第二个参数：
            initialArg: state的初始值，

    
    返回值: 数组
      第一个参数：state用来获取state的值,
      第二个参数：state修改的派发器，
                通过派发器可以发送操作state的命令，
                具体的修改行为将会由另外一个函数执行

  */
 const [count, countDispatch] = useReducer(countReducer, 1);
 const addHander = ()=> {
  countDispatch({type: 'ADD'});
 }

  
  // 购物车方法：添加
  /*
  const addItem = (meal) => {
    const newCart = {...cartData};

    if (newCart.items.indexOf(meal) === -1) {
      meal.amount = 1;
      newCart.items.push(meal);
    } else {
      meal.amount += 1;
    }
    newCart.totalAmount += 1;
    newCart.totalPrice += meal.price;

    setCartData(newCart)
  }
  */
  

  // 购物车方法：删除
  /*
  const subItem = (meal) => {
    const newCart = {...cartData};

    meal.amount -= 1;
    if (meal.amount === 0) {
      newCart.items.splice(newCart.items.indexOf(meal), 1);
    }

    newCart.totalAmount -= 1;
    newCart.totalPrice -= meal.price;

    setCartData(newCart)
  }
  */

  const handleFilter = (keyWord) => {
    const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyWord) !== -1);
    setMealsData(newMealsData);
  }

  // 购物车方法：清空
  /*
  const clearCart = () => {
    const newCart = {...cartData};
    // 将购物车中商品的数量清0
    newCart.items.forEach(item => delete item.amount);
    newCart.items = [];
    newCart.totalAmount = 0;
    newCart.totalPrice = 0;

    setCartData(newCart);
  }
  */
  
  return (
    // <CartContext.Provider value={{...cartData, addItem, subItem, clearCart}}>
    <CartContext.Provider value={{...cartData, cartDispatch}}>
      <div>
        <FilterMeals onFilter={handleFilter}/>
        <Meals mealsData={mealsData}/>
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
