import classes from './Layout.module.css';

export default function Layout(props) {
  return (
    <div
      className={`${classes.layout} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </div>
  );
}
