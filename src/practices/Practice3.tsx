export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString();
  };
  //totalが文字列変化されており、エラーの発見が可能
  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>practice question 変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
