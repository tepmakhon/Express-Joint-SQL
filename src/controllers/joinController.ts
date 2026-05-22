import { Request, Response } from "express";

import { pool } from "../db/db";

import {
  INNER_JOIN,
  LEFT_JOIN,
  RIGHT_JOIN,
  FULL_JOIN
} from "../queries/joinQuery";

export const innerJoin = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await pool.query(INNER_JOIN);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "INNER JOIN failed"
    });
  }
};

export const leftJoin = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await pool.query(LEFT_JOIN);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "LEFT JOIN failed"
    });
  }
};

export const rightJoin = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await pool.query(RIGHT_JOIN);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "RIGHT JOIN failed"
    });
  }
};

export const fullJoin = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await pool.query(FULL_JOIN);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "FULL JOIN failed"
    });
  }
};