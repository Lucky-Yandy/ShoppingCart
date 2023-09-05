const Currency_Format= new Intl.NumberFormat(undefined,{
 currency:"USD", style:"currency"})



export function formatCurrency(number:number){
 return Currency_Format.format(number)

}
