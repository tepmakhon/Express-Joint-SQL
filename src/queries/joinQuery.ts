export const INNER_JOIN = `
SELECT
    u.id,
    u.name,
    u.email,
    o.product
FROM users u
INNER JOIN orders o
ON u.id = o.user_id;
`;

export const LEFT_JOIN = `
SELECT
    u.id,
    u.name,
    u.email,
    o.product
FROM users u
LEFT JOIN orders o
ON u.id = o.user_id;
`;

export const RIGHT_JOIN = `
SELECT
    u.id,
    u.name,
    u.email,
    o.product
FROM users u
RIGHT JOIN orders o
ON u.id = o.user_id;
`;

export const FULL_JOIN = `
SELECT
    u.id,
    u.name,
    u.email,
    o.product
FROM users u
FULL JOIN orders o
ON u.id = o.user_id;
`;