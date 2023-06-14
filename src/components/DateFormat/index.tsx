interface DateFormatProps {
  date: Date;
}

const DateFormat = ({ date }: DateFormatProps) => {
  return (
    <>
      {new Date(
        Number(date.toString().substring(0, 4)),
        Number(date.toString().substring(5, 7)) - 1,
        Number(date.toString().substring(8, 10))
      ).toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })}
    </>
  );
};

export default DateFormat;
