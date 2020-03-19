const path = require('path')

// queries the entire project for all node files
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    // filters the nodes to only those of the type Markdown Remark i.e markdown files
    if (node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        // uses the createNodeField function to create a slug field on each markdown node
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}

// create pages for each file returned from graphQL query.
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    
    // 1. get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    
    // 2. get markdown data
    const res = await graphql(`
    query {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)

    // 3. create new pages
    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}