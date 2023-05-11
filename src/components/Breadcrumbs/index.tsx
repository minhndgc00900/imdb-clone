import { useLocation } from "react-router";
import { hyphenToUpper } from "../../shared/utils";
import { Arrow, BreadCrumb } from "./styled";

interface BreadcrumbsProps{
  title: string;
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { title = '' } = props;
  const { pathname } = useLocation();
  const pathList = pathname.split("/").filter((it: string) => it !== "");
  console.log(22, props.title);
  

  return (
    <nav>
      {pathList.map((path: string, index: number) => {
        let pathN = path;

        if(title && index === pathList.length -1){
          pathN = title;
        }

        const name = hyphenToUpper(pathN);
        const isActive = path === pathList[pathList.length - 1];

        return (
          <>
            <BreadCrumb to={`/${path}`} key={index} isactive={isActive}>
              {name}
            </BreadCrumb>
            {!isActive && <Arrow>/</Arrow>}
          </>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
