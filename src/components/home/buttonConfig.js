import Swal from "sweetalert2";
export const buttonConfig = [
    {
        id: 1,
        content: 'TOGGLE CASE',
        action: ({ inputValue, setOutputValue }) => {
            let result = "";
            for (let i = 0; i < inputValue.length; i++) {
                let character = inputValue[i];
                if (character === character.toUpperCase()) {
                    result += character.toLowerCase();
                } else {
                    result += character.toUpperCase();
                }
            }
            setOutputValue(result);
        }
    },
    {
        id: 2,
        content: 'PROPER CASE',
        action: ({ inputValue, setOutputValue }) => {
            let lowercase = inputValue.toLowerCase();
            let slice = lowercase.split(" ");
            let result = "";
            for (let i = 0; i < slice.length; i++) {
                if (slice[i]) {
                    slice[i] = slice[i].charAt(0).toUpperCase() + slice[i].slice(1);
                }
            }
            result = slice.join(" ");
            setOutputValue(result);
        }
    },
    {
        id: 3,
        content: 'SENTENCE CASE',
        action: ({ inputValue, setOutputValue }) => {
            let minusculo = inputValue.toLowerCase();
            let slice = minusculo.split(/([.!?])/);
            let result = "";

            for (let i = 0; i < slice.length; i += 2) {
                if (slice[i]) {
                    slice[i] = slice[i].charAt(0).toUpperCase() + slice[i].slice(1);
                }
            }
            result = slice.join("");
            setOutputValue(result);
        }
    },
    {
        id: 4,
        content: 'UPPERCASE',
        action: ({ inputValue, setOutputValue }) => {
            let result = "";
            for (let i = 0; i < inputValue.length; i++) {
                let character = inputValue[i];
                result += character.toUpperCase();
            }
            setOutputValue(result);
        }
    },
    {
        id: 5,
        content: 'LOWERCASE',
        action: ({ inputValue, setOutputValue }) => {
            var result = "";
            for (var i = 0; i < inputValue.length; i++) {
                var character = inputValue[i];
                result += character.toLowerCase();
            }
            setOutputValue(result);
        }
    },
    {
        id: 6,
        content: 'MIXEDCASE',
        action: ({ inputValue, setOutputValue }) => {
            let result = "";
            let j = 0;
            for (let i = 0; i < inputValue.length; i++) {
                let character = inputValue[i];
                if (character === "") {
                    result += character;
                } else {
                    if (i % 2 == 0) {
                        result += character.toUpperCase();
                    } else {
                        result += character.toLowerCase();
                    }
                }
                j++;
            }
            setOutputValue(result);
        }
    },
    {
        id: 7,
        content: 'RESET',
        action: ({ setOutputValue }) => {
            const result = "";
            setOutputValue(result);
        }
    },
    {
        id: 8,
        content: 'COPY RESULT',
        action: async ({ outputValue }) => {
            try {
                if (!outputValue) {
                    Swal.fire({
                        icon: "warning",
                        title: "Atenção!",
                        text: "Não há conteúdo para copiar.",
                    });
                    return;
                }
                await navigator.clipboard.writeText(outputValue);
                Swal.fire({
                    icon: "success",
                    title: "Texto copiado!",
                    text: "O conteúdo foi copiado para a área de transferência.",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    toast: true,
                    position: "top-end",
                });
            } catch (err) {
                console.error("Erro ao copiar:", err);
                Swal.fire({
                    icon: "error",
                    title: "Erro ao copiar!",
                    text: "Confira o texto e tente novamente.",
                });
            }
        }
    }
]