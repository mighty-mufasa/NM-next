interface CustomTooltipProps {
  active?: boolean;
  payload?: payloadType[];
  label?: number;
}

type payloadType = {
  value: string | number;
  name: string;
};

export const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length > 0) {
    return (
      <div
        style={{
          backgroundColor: '#5b63ffe7',
          padding: '10px',
          borderRadius: '10px',
          boxShadow: '1px 2px 10px -2px #7873ffb1',
        }}
      >
        {payload.map((pld: payloadType) => (
          <p
            key={pld.name}
            style={{
              borderStyle: 'solid 1px',
              fontSize: '13px',
              fontWeight: '600',
              fontFamily: 'sans-serif',
              color: '#fff',
            }}
          >
            {`${pld.name} : ${pld.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};
