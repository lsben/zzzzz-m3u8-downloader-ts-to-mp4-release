import React from 'react';


function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    return 'Copyright © ' + y + ' Zworld Inc';
 }
 
 const BottomPart = (props) => {
    return (
        <div style={{ backgroundColor: "#6a737c" , paddingTop:10,paddingBottom:10, marginTop:0, marginBottom: 0 , textAlign: "center", color:"white" }}>
          <p>{copyrightYear()}</p>
        </div>
      );
 };

 export default BottomPart;