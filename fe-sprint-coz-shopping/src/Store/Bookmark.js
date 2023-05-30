import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

const CustomToast = ({ message, imageSrc }) => {
    return (
      <div className='customToast'>
        <img src={imageSrc} alt='toast' />
        <span>{message}</span>
      </div>
    );
  };

  const initialbookmarkState = localStorage.getItem("bookmark")
  ? JSON.parse(localStorage.getItem("bookmark"))
  : [];

  const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState: initialbookmarkState,
    reducers: {
      toggleBookmark(state, action) {
        if (state.includes(action.payload)) {
          state.splice(state.indexOf(action.payload), 1);
          toast(
            <CustomToast
              message='상품이 북마크에서 제거되었습니다.'
            />
          );
        } else {
          state.length > 4
            ? state.unshift(action.payload)
            : state.push(action.payload);
          toast(
            <CustomToast
              message='상품이 북마크에서 추가되었습니다.'
            />
          );
        }
        localStorage.setItem("bookmark", JSON.stringify(state));
      },
    },
  });
  
  export const bookmarkActions = bookmarkSlice.actions;
  export default bookmarkSlice.reducer;
