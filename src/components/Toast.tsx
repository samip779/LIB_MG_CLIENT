interface Props {
  type: 'success' | 'danger' | 'info';
  message: string;
}

const Toast: React.FC<Props> = ({ type, message }) => {
  const typeClass =
    type === 'success'
      ? 'alert alert-success'
      : type === 'info'
      ? 'alert alert-info'
      : 'alert alert-info bg-red-400';

  return (
    <div className='toast toast-top toast-end'>
      <div className={typeClass}>
        <div>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
