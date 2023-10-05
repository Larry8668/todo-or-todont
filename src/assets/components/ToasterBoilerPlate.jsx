import React from 'react'
import toasts, {Toaster} from'react-hot-toast';
export default function ToasterBoilerPlate() {
  return (
    <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 3000,
            there: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />
  )
}
