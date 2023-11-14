export const GetWordStr = (str, count) =>{
     return str?.split(/\s+/).slice(0, count).join(" ");
}


export const ConvertDateIntoUrdu = (inputDate) => {
     const date = new Date(inputDate);

     const options = { month: 'long', day: 'numeric' };
     const formatter = new Intl.DateTimeFormat('ur-PK', options); // 'ur-PK' is the code for Urdu in Pakistan

     const formattedDate = formatter.format(date);
     return formattedDate
}