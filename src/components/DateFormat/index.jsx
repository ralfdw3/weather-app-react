const DateFormat = ({ date }) => {
  return (
    <>
      {new Date(
        date.substring(0, 4),
        date.substring(5, 7) - 1,
        date.substring(8, 10)
      ).toLocaleDateString("pt-BR", { timezone: "America/Sao_Paulo" })}
    </>
  );
};

export default DateFormat;
