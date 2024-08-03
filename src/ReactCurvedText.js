import ReactCurvedText from 'react-curved-text';

const MyComponent = () => {
    return (
        <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={50}
            reversed={false}
            text="AirDropBPM 2025"
            textProps={{ style: { fontSize: 24 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
        />
    );
};

export default MyComponent;