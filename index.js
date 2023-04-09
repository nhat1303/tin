function B(){
    const height1 = this.h.valueAsNumber
    const weight=this.w.valueAsNumber,
    BMI=parseFloat(weight/(height1/100)**2).toFixed(2),


    h=[[0,18.49],[18.5,24.99],[25,29.99],[30,34.99],[35,39.99],[40,100]].findIndex(height1=>height1[0]<=BMI&&BMI<height1[1]);
    let o=(0.393700787*height1).toFixed(0);this.ho.value=`${height1} cm / ${Math.floor(o/12)}' ${o%=12}"`,this.wo.value=`${weight} kg / ${(2.2046*weight).toFixed(2)} lb`,
    this.g[h].checked=!0,this.r.value=BMI
    console.log()
}
const bmi = document.querySelector('.c-bmi')
bmi.addEventListener('input', B);
bmi.dispatchEvent(new Event('input'));


