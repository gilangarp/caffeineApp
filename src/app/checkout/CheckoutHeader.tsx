interface CheckoutHeaderProps {
    onAddMenuClick: () => void;
  }
  
  export const CheckoutHeader = ({onAddMenuClick}:CheckoutHeaderProps) => {
    return (
      <section className="h-fit justify-between grid grid-cols-1 grid-rows-2">
        <div className="flex flex-row justify-between">
  
          <p className="text-xl font-medium">Your Order</p>
          <button
            onClick={onAddMenuClick}
            className="px-4 py-2 rounded-lg bg-primary font-normal"
          >
            + Add Menu
          </button>
        </div>
      </section>
    );
  };