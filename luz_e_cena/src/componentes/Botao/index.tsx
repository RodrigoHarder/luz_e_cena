type BotaoProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
};

type Assinaturas = {
    (props: BotaoProps): React.JSX.Element;
    (props: LinkProps): React.JSX.Element;
};

const comHref = (props: BotaoProps | LinkProps): props is LinkProps =>
    "href" in props;

const Botao: Assinaturas = (props: BotaoProps | LinkProps) => {
    if (comHref(props)) return <a {...props}/>;
    return <button {...props}/>;
};

export default Botao;