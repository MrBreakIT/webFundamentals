/*JOINING TABLES*/
/*JOIN*/
/*Find all the clients (first and last name) billing amount and charged date*/

SELECT clients.first_name, clients.last_name, billing.amount, billing.charged_datetime
FROM clients
JOIN billing ON clients.id = billing.clients_id;

/*list all the domain names and leads (first and last name) for each site*/

SELECT sites.domain_name, leads.first_name, leads.last_name
FROM sites
JOIN leads ON sites.id = leads.sites_id;

/*JOIN ON MULTIPLE TABLES*/
/*Get the names of the clients, their domain names and the first names of all the leads generated from those sites*/

SELECT clients.first_name AS clients_first, clients.last_name, sites.domain_name, leads.first_name AS leads_first
from clients
JOIN sites ON clients.id = sites.clients_id
JOIN leads ON sites_id = leads.sites_id;

/*LEFT AND RIGHT JOIN*/
/*List all the clients and the sites each client has, even if the client hasn't landed a site yet*/

SELECT clients.first_name, clients.last_name, sites.domain_name
FROM clients
LEFT JOIN sites ON clients.id = sites.clients_id;

/*GROUPING ROWS
GROUP BY
SUM, MIN, MAX, AVG
Find all the clients (first and last name) and their total billing amounts*/

SELECT clients.first_name, clients.last_name, SUM(billing.amount)      /*Can change SUM to Min, Max, Avg here*/
FROM clients
JOIN billing ON clients.id = billing.clients_id
GROUP BY clients.id;

/*GROUP CONCAT
List all the domain names associated with each client*/ 

SELECT clients.first_name, clients.last_name, group_concat('  ',sites.domain_name) as domains
FROM clients
JOIN sites ON clients.id = sites.clients_id
GROUP BY clients.id;

/*COUNT
find the total number of leads for each site*/

SELECT COUNT(leads.id), sites.domain_name
FROM sites
JOIN leads ON sites.id = leads.sites_id
GROUP BY sites.id;
