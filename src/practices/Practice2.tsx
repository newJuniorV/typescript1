export const Practice2 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => {
    calcTotalFee(100);
  };
  return (
    <div>
      <p>practice question 返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
