--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cakes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cakes (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    price numeric NOT NULL,
    image text NOT NULL,
    description text NOT NULL
);


--
-- Name: cakes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cakes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cakes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cakes_id_seq OWNED BY public.cakes.id;


--
-- Name: clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    address character varying(100) NOT NULL,
    phone character varying(20) NOT NULL
);


--
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    "clientId" integer,
    "cakeId" integer,
    quantity integer NOT NULL,
    "createdAt" timestamp without time zone NOT NULL,
    "totalPrice" numeric NOT NULL
);


--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: cakes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cakes ALTER COLUMN id SET DEFAULT nextval('public.cakes_id_seq'::regclass);


--
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Data for Name: cakes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cakes VALUES (1, 'bolo de banana', 60, 'https://receitinhas.com.br/wp-content/uploads/2022/06/bolo-de-banana-com-calda-1200x799.png', 'delicioso');


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.clients VALUES (1, 'Gislaine', 'rua 20', '12345678910');
INSERT INTO public.clients VALUES (2, 'Gislaine', 'rua 20', '12345678910');
INSERT INTO public.clients VALUES (3, 'Fernando', 'rua 3', '12345678910');
INSERT INTO public.clients VALUES (4, 'BIL', 'Rua 1 do lado da rua 2', '9876543210');
INSERT INTO public.clients VALUES (5, 'BIL', 'Rua 1 do lado da rua 2', '9876543210');
INSERT INTO public.clients VALUES (6, 'BIL', 'Rua 1 do lado da rua 2', '9876543210');
INSERT INTO public.clients VALUES (7, 'BIL', 'Rua 1 do lado da rua 2', '9876543210');
INSERT INTO public.clients VALUES (8, 'BIL', 'Rua 1 do lado da rua 2', '9876543210');
INSERT INTO public.clients VALUES (9, 'BILLY', 'Rua 2 do lado da rua 3', '9876543210');
INSERT INTO public.clients VALUES (10, 'BILLY', 'Rua 2 do lado da rua 3', '0123456789');


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.orders VALUES (7, 1, 1, 1, '2023-01-09 00:00:00', 60);
INSERT INTO public.orders VALUES (8, 1, 1, 1, '2023-01-09 00:00:00', 60);
INSERT INTO public.orders VALUES (9, 2, 1, 4, '2023-01-09 00:00:00', 240);
INSERT INTO public.orders VALUES (10, 2, 1, 4, '2023-01-09 00:00:00', 240);
INSERT INTO public.orders VALUES (11, 2, 1, 3, '2023-01-10 00:00:00', 180);
INSERT INTO public.orders VALUES (12, 2, 1, 4, '2023-01-10 00:00:00', 240);
INSERT INTO public.orders VALUES (13, 1, 1, 4, '2023-01-10 00:00:00', 240);
INSERT INTO public.orders VALUES (14, 1, 1, 4, '2023-01-10 00:00:00', 240);
INSERT INTO public.orders VALUES (15, 3, 1, 4, '2023-01-10 00:00:00', 240);
INSERT INTO public.orders VALUES (16, 4, 1, 4, '2023-01-10 20:57:36', 240);
INSERT INTO public.orders VALUES (17, 4, 1, 4, '2023-01-10 21:00:00', 240);
INSERT INTO public.orders VALUES (18, 4, 1, 4, '2023-01-10 21:01:00', 240);
INSERT INTO public.orders VALUES (19, 4, 1, 4, '2023-01-10 00:00:00', 240);
INSERT INTO public.orders VALUES (20, 4, 1, 5, '2023-01-10 00:00:00', 300);


--
-- Name: cakes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cakes_id_seq', 1, true);


--
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.clients_id_seq', 10, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.orders_id_seq', 20, true);


--
-- Name: cakes cakes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cakes
    ADD CONSTRAINT cakes_pkey PRIMARY KEY (id);


--
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: orders orders_cakeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_cakeId_fkey" FOREIGN KEY ("cakeId") REFERENCES public.cakes(id);


--
-- Name: orders orders_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id);


--
-- PostgreSQL database dump complete
--

