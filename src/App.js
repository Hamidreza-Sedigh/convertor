import logo from './logo.svg';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConvertRules from './ConvertRules.js';

function Converter({ direction, ...args }) {
  const [km, setKm] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [fromUnit, setFromUnit] = useState('واحد');
  const [toUnit, setToUnit] = useState('واحد');
  const [fromUnitCount, setFromUnitCount] = useState('');
  const [toUnitCount, setToUnitCount] = useState('');
  const [unit, setUnit] = useState('');
  const [fromRatio, setFromRatio] = useState(1);
  const [toRatio, setToRatio] = useState(1);

  const quantityOption = [
    { quantityName: 'distance', quantityPersianName: 'طول' },
    { quantityName: 'area', quantityPersianName: 'مساحت' },
    { quantityName: 'volume', quantityPersianName: 'حجم' },
    { quantityName: 'speed', quantityPersianName: 'سرعت' },
    { quantityName: 'force', quantityPersianName: 'نیرو' },
    { quantityName: 'energy', quantityPersianName: 'انرژی' },
    { quantityName: 'temp', quantityPersianName: 'دما' },
    { quantityName: 'mass', quantityPersianName: 'جرم' },
    { quantityName: 'gasht', quantityPersianName: 'گشتاور' },
    { quantityName: 'pressure', quantityPersianName: 'جرم' },
    { quantityName: 'power', quantityPersianName: 'توان' },
    { quantityName: 'time', quantityPersianName: 'زمان' },
    { quantityName: 'density', quantityPersianName: 'چگالی' },
    { quantityName: 'frequency', quantityPersianName: 'فرکانس' },
    { quantityName: 'angle', quantityPersianName: 'زاویه' },
    { quantityName: 'acceleration', quantityPersianName: 'شتاب' },
  ];

  const options = [
    // { unit: '', label: '', group: '', ratioBase: 0 },
    //Distance
    { unit: 'Mm', label: 'مگامتر', group: 'distance', ratioBase: 1000000 },
    { unit: 'km', label: 'کیلومتر', group: 'distance', ratioBase: 1000 },
    { unit: 'm', label: 'متر', group: 'distance', ratioBase: 1 },
    { unit: 'cm', label: 'سانتی متر', group: 'distance', ratioBase: 0.01 },
    { unit: 'mm', label: 'میلی متر', group: 'distance', ratioBase: 0.001 },
    { unit: 'um', label: 'میکرون', group: 'distance', ratioBase: 0.000001 },
    { unit: 'nm', label: 'نانومتر', group: 'distance', ratioBase: 0.000000001 },
    //{unit: 'angstrom',label: 'آنگستروم',group: 'distance',ratioBase: 0.0000000001},
    { unit: 'mi', label: 'مایل', group: 'distance', ratioBase: 1.609344 },
    { unit: 'rd', label: 'راد', group: 'distance', ratioBase: 5.0292 },
    { unit: 'fathom', label: 'فاتوم', group: 'distance', ratioBase: 1.8288 },
    { unit: 'yard', label: 'یارد', group: 'distance', ratioBase: 0.9144 },
    { unit: 'ft', label: 'پا', group: 'distance', ratioBase: 0.3048 },
    { unit: 'in', label: 'اینچ', group: 'distance', ratioBase: 0.0254 },

    //Aera
    { unit: 'km2', label: 'کیلومتر مربع', group: 'area', ratioBase: 1000000 },
    { unit: 'm2', label: 'متر مربع', group: 'area', ratioBase: 1 },
    { unit: 'cm2', label: 'سانتی متر مربع', group: 'area', ratioBase: 0.0001 },
    {
      unit: 'mm2',
      label: 'میلی متر مربع',
      group: 'area',
      ratioBase: 0.0000001,
    },
    { unit: 'ha', label: 'هکتار', group: 'area', ratioBase: 10000 },
    { unit: 'sqin', label: 'اینچ مربع', group: 'area', ratioBase: 0.00064516 },

    //volume
    { unit: 'm3', label: 'مترمکعب', group: 'volume', ratioBase: 1 },
    {
      unit: 'cm3',
      label: 'سانتی متر مکعب (سی سی)',
      group: 'volume',
      ratioBase: 0.0000001,
    },
    { unit: 'mm3', label: 'مترمکعب', group: 'volume', ratioBase: 0.0000000001 },
    { unit: 'kl', label: 'کیلو لیتر', group: 'volume', ratioBase: 1 },
    { unit: 'l', label: 'لیتر', group: 'volume', ratioBase: 0.001 },
    { unit: 'cl', label: 'سانتی لیتر', group: 'volume', ratioBase: 0.00001 },
    { unit: 'ml', label: 'میلی لیتر', group: 'volume', ratioBase: 0.000001 },
    { unit: 'impgal', label: 'گالون', group: 'volume', ratioBase: 0.00454609 },

    //speed
    { unit: 'm/s', label: 'متر بر ثانیه', group: 'speed', ratioBase: 1 },
    { unit: 'km/h', label: 'کیلومتر در ساعت', group: 'speed', ratioBase: 5.18 },
    { unit: 'mph', label: 'مایل بر ساعت', group: 'speed', ratioBase: 0.44704 },
    { unit: 'ft/s', label: 'پا در ثانیه', group: 'speed', ratioBase: 0.3048 },
    { unit: 'knot', label: 'گره', group: 'speed', ratioBase: 4.639 }, //???

    //force
    { unit: 'GN', label: 'گیگا نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'MN', label: 'مگا نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'kN', label: 'کیلو نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'N', label: 'نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'mN', label: 'میلی نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'uN', label: 'میکرو نیوتن', group: 'force', ratioBase: 1 },
    { unit: 'nN', label: 'نانو نیوتن', group: 'force', ratioBase: 1 },

    //energy
    { unit: 'J', label: 'ژول', group: 'energy', ratioBase: 1 },
    {
      unit: 'kw.h',
      label: 'کیلو وات ساعت',
      group: 'energy',
      ratioBase: 3600000,
    },
    { unit: 'cal', label: 'کالری', group: 'energy', ratioBase: 4184 },

    //temp
    { unit: 'k', label: 'کلوین', group: 'temp', ratioBase: 1 },
    { unit: 'CO', label: 'سانتی گراد', group: 'temp', ratioBase: 273.15 },
    { unit: 'FO', label: 'فارنهایت', group: 'temp', ratioBase: 1.8 },
  ];

  const toggle1 = () => setDropdownOpen((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState2) => !prevState2);
  const toggle3 = () => setDropdownOpen3((prevState3) => !prevState3);

  let quantityButtonTitle = 'کمیت';
  let fromUnitButtonTitle = 'از واحد';
  let toUnitButtonTitle = 'به واحد';

  function handleChange(e) {
    //setKm(e.target.value);
    setFromUnitCount(e.target.value);
  }

  function convertW(fromUnitCount) {
    return ConvertRules(quantity, fromUnit, fromUnitCount, toUnit);
  }

  function convert(fromUnitCount) {
    let baseUnitCount = 0;
    let result = 0;
    if (quantity == 'temp') {
      switch (fromUnit) {
        case 'co':
          baseUnitCount = fromUnitCount;
          break;
        case 'k':
          baseUnitCount = fromUnitCount - 273.15;
          break;
        case 'FO':
          baseUnitCount = ((fromUnitCount - 32) * 5) / 9;
          break;
      }
      console.log('baseUnitCount', baseUnitCount);
      switch (toUnit) {
        case 'CO':
          result = baseUnitCount;
          break;
        case 'k':
          result = baseUnitCount + 273.15;
          break;
        case 'FO':
          result = (baseUnitCount * 9) / 5 + 32;
          break;
      }
      return result;
    } else {
      baseUnitCount = fromUnitCount * fromRatio;
      result = (baseUnitCount / toRatio).toFixed(4);
    }
    return result;
  }

  function convertO(fromUnitCount) {
    //return (km / 1.609).toFixed(2);
    console.log('----------------------');
    console.log('quantity:', quantity);
    console.log('fromUnit:', fromUnit);
    console.log('fromUnitCount:', fromUnitCount);
    switch (quantity) {
      case 'distance': {
        let baseUnit = 'm';
        let baseUnitCount = 0;
        let result = 0;

        switch (fromUnit) {
          case 'km':
            baseUnitCount = fromUnitCount * 1000;
            break;
          case 'm':
            baseUnitCount = fromUnitCount;
            break;
          case 'cm':
            baseUnitCount = fromUnitCount / 100;
            break;
          case 'dm':
            baseUnitCount = fromUnitCount / 50;
            break;
        }
        console.log('baseUnitCount:', baseUnitCount);
        switch (toUnit) {
          case 'km':
            // setToUnitCount(baseUnitCount / 1000);
            result = baseUnitCount / 1000;
            break;
          case 'm':
            // setToUnitCount(baseUnitCount);
            result = baseUnitCount;
            break;
          case 'cm':
            // setToUnitCount(baseUnitCount * 100);
            result = baseUnitCount * 100;
            break;
        }
        console.log('result:', result);
        return result;
      }

      case 'volume':
        console.log('Volume is called');
        break;
      default:
        return 0;
    }
  }

  function actionm(e) {
    setUnit(e.target.value);
  }

  function changeQuantity(e) {
    //setQuantity = e.value;
    setQuantity(e.target.value);
  }

  function changeFromUnit(e) {
    setFromUnit(e.target.value);
    //setRatio(options[0].ratioBase);
    //let newOpt = options.filter((opt) => opt.unit == e.target.value);
    setFromRatio(
      options.filter((opt) => opt.unit == e.target.value)[0].ratioBase
    );
    //console.log('newOpt', newOpt);
  }

  function changeToUnit(e) {
    setToUnit(e.target.value);
    setToRatio(
      options.filter((opt) => opt.unit == e.target.value)[0].ratioBase
    );
  }

  function distanceQantity() {
    setQuantity('distance');
  }

  return (
    <>
      <div className="d-flex ">
        <Dropdown isOpen={dropdownOpen} toggle={toggle1} direction={direction}>
          <DropdownToggle caret color="primary">
            {quantityButtonTitle}
          </DropdownToggle>
          <DropdownMenu {...args}>
            {quantityOption
              //.filter((opt) => opt.group == quantity)
              .map((qo) => (
                <DropdownItem value={qo.quantityName} onClick={changeQuantity}>
                  {qo.quantityPersianName}
                </DropdownItem>
              ))}
          </DropdownMenu>
          {/* <DropdownMenu {...args}>
            <DropdownItem value={'distance'} onClick={changeQuantity}>
              طول
            </DropdownItem>
            <DropdownItem value={'volume'} onClick={changeQuantity}>
              حجم
            </DropdownItem>
            <DropdownItem value={'degree'} onClick={changeQuantity}>
              دما
            </DropdownItem>
            <DropdownItem disabled>تاریخ</DropdownItem>
          </DropdownMenu> */}
        </Dropdown>
      </div>

      <div className="d-flex ">
        <Dropdown isOpen={dropdownOpen2} toggle={toggle2} direction={direction}>
          <DropdownToggle caret color="primary">
            {fromUnitButtonTitle}
          </DropdownToggle>

          <DropdownMenu {...args}>
            {options
              .filter((opt) => opt.group == quantity)
              .map((op) => (
                <DropdownItem value={op.unit} onClick={changeFromUnit}>
                  {op.label}
                </DropdownItem>
              ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* <div className="d-flex p-5"> */}
      <div className="d-flex">
        <Dropdown isOpen={dropdownOpen3} toggle={toggle3} direction={direction}>
          <DropdownToggle caret color="primary">
            {toUnitButtonTitle}
          </DropdownToggle>
          <DropdownMenu {...args}>
            {options
              .filter((opt) => opt.group == quantity)
              .map((op) => (
                <DropdownItem value={op.unit} onClick={changeToUnit}>
                  {op.label}
                </DropdownItem>
              ))}

            {/* <DropdownItem value={'km'} onClick={changeFromUnit}>
                کیلو متر              
              </DropdownItem>
              <DropdownItem value={'m'} onClick={changeFromUnit}>
                متر
              </DropdownItem>
              <DropdownItem value={'cm'} onClick={changeFromUnit}>
                سانتی متر
              </DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* <div className="App"> */}
      <div className="resultBox">
        <input type="text" value={fromUnitCount} onChange={handleChange} />
        <p>quantity: {quantity}</p>
        <p>fromUnit: {fromUnit}</p>
        <p>fromUnitCount: {fromUnitCount}</p>
        <p>toUnit: {toUnit}</p>
        <p>toUnitCount: {toUnitCount}</p>
        <p>fromRatio: {fromRatio} </p>
        <p>toRatio: {toRatio} </p>

        <p>
          {/* {km} km is {convert(km)} miles{' '} */}
          {fromUnitCount} {fromUnit} is {convert(fromUnitCount)} {toUnit}
        </p>
      </div>
    </>
  );
}

Converter.propTypes = {
  direction: PropTypes.string,
};

export default Converter;
