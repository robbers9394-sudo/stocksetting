create table if not exists public.inventory_items (
  id text primary key,
  name text not null,
  base_name text not null,
  color text not null,
  season text not null,
  category text not null,
  one_size boolean not null default false,
  initial_stock jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.inventory_transactions (
  id text primary key,
  item_id text not null references public.inventory_items(id) on delete cascade,
  size text not null,
  type text not null check (type in ('in', 'out')),
  quantity integer not null check (quantity >= 0),
  date date not null,
  created_at timestamptz not null default now()
);

alter table public.inventory_items enable row level security;
alter table public.inventory_transactions enable row level security;

drop policy if exists "inventory_items_public_rw" on public.inventory_items;
create policy "inventory_items_public_rw"
on public.inventory_items
for all
to anon, authenticated
using (true)
with check (true);

drop policy if exists "inventory_transactions_public_rw" on public.inventory_transactions;
create policy "inventory_transactions_public_rw"
on public.inventory_transactions
for all
to anon, authenticated
using (true)
with check (true);
