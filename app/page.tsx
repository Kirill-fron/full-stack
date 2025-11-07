import { Container, Filters } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/titile";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title={"Пиццы"} items={[
                {
                  id: 1,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 2,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 3,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 4,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 5,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 6,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
              ]} categoryId={1} />

              <ProductsGroupList title={"Комбо"} items={[
                {
                  id: 1,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 2,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 3,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 4,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 5,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
                {
                  id: 6,
                  name: 'Чизбургер',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/01959610e6cf7839af86f0043e12f829.avif',
                  price: 550,
                  items: [{ price: 550 }]
                },
              ]} categoryId={2} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
