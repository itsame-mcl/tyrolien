import React, { useEffect } from 'react';
import { useStore, Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';
import store from '../js/store';

const OptionsPage = () => {
    const articles_ordonnes = useStore("articles_ordonnes");
    return(
    <Page>
        <Navbar title="Options" backLink="Back" />
        <BlockTitle>Options</BlockTitle>
        <Block strong>
            <p>Fugiat perspiciatis excepturi, soluta quod non ullam deleniti. Nobis sint nemo consequuntur, fugiat. Eius perferendis animi autem incidunt vel quod tenetur nostrum, voluptate omnis quasi quidem illum consequuntur, a, quisquam.</p>
            <p>Laudantium neque magnam vitae nemo quam commodi, in cum dolore obcaecati laborum, excepturi harum, optio qui, consequuntur? Obcaecati dolor sequi nesciunt culpa quia perspiciatis, reiciendis ex debitis, ut tenetur alias.</p>
        </Block>
        <Block strong>
            <List>
                <ListItem checkbox
                          value="articles_ordonnes"
                          checked={articles_ordonnes}
                          title="Ordonner les articles par prix croissant"
                onChange={(e) => store.dispatch("setArticlesOrdonnes", {value: e.target.checked})}></ListItem>
            </List>
        </Block>
    </Page>);
};

export default OptionsPage;