export const Practice4 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    console.log(getTotalFee(100));
  };
  return (
    <div>
      <p>practice question 設定ファイルを触って見る</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
