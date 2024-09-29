function SomeComponent({prop}: TSomeType) {
    const [state, setState] = useState("");

    useEffect(() => {
        // Этот побочный эффект будет выполняться после первого рендера
    // и после последующих перерендеров, вызванных изменениями значений
    // пропса prop или состояния state
  }, [prop, state]);
}

function SomeComponent() {
    useEffect(() => {
    // Этот побочный эффект выполняется после первого рендера компонента
    return () => {
      // Этот побочный эффект выполняется при размонтировании компонента
    }
  }, []); 
}

-----
type TModalProps = {
    onClose: () => void
}

function Modal({onClose}: TModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
        e.key == "Escape" && onClose();
        };

        document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
    }, []);
}
-----


function SearchForm() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState("");
 
      useEffect(() => {
       if (!query) {
         setResult("");
                 return;
       }
 
             const controller = new AbortController();
       const signal = controller.signal;
 
       fetch(API, {
           signal,
         body: JSON.stringify({query})
             })
       .then(response => response.json())
       .then(response => setResult(response.data))
 
       return () => {
                 // Отменяем запрос
         controller.abort();    
       }
    }, [query]);    
 }

