export const Practice1 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    console.log(getTotalFee(100));
  };
  return (
    <div>
      <p>practice question 引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
