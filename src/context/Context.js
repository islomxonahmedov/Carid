import axios from "axios";
import Swal from "sweetalert2";
import React, { Children, useEffect, useState } from "react"

export const ContextData = React.createContext();
function Context({ children }) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  // barcha mahsulotlar royhati

  const [users, setusers] = useState([]);

  // korzinkadagi barcha mahsulotlar
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);

  // Korzinkadagi barcha mahsulotlarni qayta olish funksiyasi
  function getBasketProducts() {
    setBasket(JSON.parse(localStorage.getItem("basket")) || []);
  };
  // Like-dagi barcha mahsulotlar
  const [like, setLike] = useState(JSON.parse(localStorage.getItem("likes")) || []);

  // Like-dagi barcha mahsulotlarni qayta olish funksiyasi
  function getLikeProducts() {
    setLike(JSON.parse(localStorage.getItem("likes")) || [])
  };

  //api dan malumotlarni olish
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users');
        setusers(response.data);
      } catch (error) {
        console.error('Ma\'lumotlarni olishda xatolik:', error);
      }
    };

    fetchData();
  }, []);

  // Korzinkaga mahsulot qo'shish
  function addToCart(mahsulot) {
    if (mahsulot.status) {
      if (basket.filter(element => element.id === mahsulot.id).length === 0) {
        if (localStorage.getItem("basket")) {
          // Agar localstorage-da mahsulot bo'lsa...
          localStorage.setItem("basket", JSON.stringify([...basket, mahsulot]));
        }

        else {
          // Agar localstorage-da mahsulot bo'lmasa...
          localStorage.setItem("basket", JSON.stringify([mahsulot]));
        }
        getBasketProducts();
        Toast.fire({
          icon: "success",
          title: "Successfully added to the cart"
        });
      }
      else {
        Swal.fire({
          title: "Ogohlantirish!",
          text: "Ushbu mahsulot allaqchon mavjud!",
          icon: "warning"
        });
      }
    }
    else {
      Swal.fire({
        title: "Ogohlantirish!",
        text: "Afsuski ushbu mahsulot omborda mavjud emas!",
        icon: "warning"
      });
    }
  };

  // Korzinkadan mahsulot o'chirish
  function deleteProductFromCart(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("basket", JSON.stringify(basket.filter(item => item.id !== id)));
        getBasketProducts();
        Toast.fire({
          icon: "success",
          title: "Successfully deleted from cart"
        });
      }
    });
  };

  // increment
  function increment(mahsulot) {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((item) =>
        item.id === mahsulot.id ? { ...item, count: item.count + 1 } : item
      );
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  }

  function decrement(mahsulot) {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((item) =>
        item.id === mahsulot.id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      );

      localStorage.setItem("basket", JSON.stringify(updatedBasket));

      if (mahsulot.count === 1) {
        deleteProductFromCart(mahsulot.id);
      }

      return updatedBasket;
    });
  }
  // Like-ga mahsulot qo'shish
  function handleLike(item) {
    if (like.filter(element => element.id === item.id).length === 0) {
      if (localStorage.getItem("likes")) {
        // Agar mahsulot bo'lsa...
        localStorage.setItem("likes", JSON.stringify([...like, item]));
      } else {
        // Agar mahsulot bo'lmasa...
        localStorage.setItem("likes", JSON.stringify([item]));
      }
      Toast.fire({
        icon: "success",
        title: "Added successfully"
      });
    }
    else {
      localStorage.setItem("likes", JSON.stringify(like.filter(i => i.id !== item.id)));
      Toast.fire({
        icon: "success",
        title: "Deleted successfully"
      });
    };
    getLikeProducts();
  };

  return (
    <ContextData.Provider value={{
      users,
      addToCart,
      basket,
      increment,
      decrement,
      deleteProductFromCart,
      like,
      handleLike
    }}>
      {children}
    </ContextData.Provider>
  )
}

export default Context